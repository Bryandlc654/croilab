import { i as setOnSetGetEnv, n as getEnv$1, t as createInvalidVariablesError } from "./runtime_BXOah7Gq.mjs";
//#region node_modules/astro/dist/env/validators.js
function getEnvFieldType(options) {
	const optional = options.optional ? options.default !== void 0 ? false : true : false;
	let type;
	if (options.type === "enum") type = options.values.map((v) => `'${v}'`).join(" | ");
	else type = options.type;
	return `${type}${optional ? " | undefined" : ""}`;
}
var stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
	if (typeof input !== "string") return {
		ok: false,
		errors: ["type"]
	};
	const errors = [];
	if (max !== void 0 && !(input.length <= max)) errors.push("max");
	if (min !== void 0 && !(input.length >= min)) errors.push("min");
	if (length !== void 0 && !(input.length === length)) errors.push("length");
	if (url !== void 0 && !URL.canParse(input)) errors.push("url");
	if (includes !== void 0 && !input.includes(includes)) errors.push("includes");
	if (startsWith !== void 0 && !input.startsWith(startsWith)) errors.push("startsWith");
	if (endsWith !== void 0 && !input.endsWith(endsWith)) errors.push("endsWith");
	if (errors.length > 0) return {
		ok: false,
		errors
	};
	return {
		ok: true,
		value: input
	};
};
var numberValidator = ({ gt, min, lt, max, int }) => (input) => {
	const num = Number.parseFloat(input ?? "");
	if (isNaN(num)) return {
		ok: false,
		errors: ["type"]
	};
	const errors = [];
	if (gt !== void 0 && !(num > gt)) errors.push("gt");
	if (min !== void 0 && !(num >= min)) errors.push("min");
	if (lt !== void 0 && !(num < lt)) errors.push("lt");
	if (max !== void 0 && !(num <= max)) errors.push("max");
	if (int !== void 0) {
		const isInt = Number.isInteger(num);
		if (!(int ? isInt : !isInt)) errors.push("int");
	}
	if (errors.length > 0) return {
		ok: false,
		errors
	};
	return {
		ok: true,
		value: num
	};
};
var booleanValidator = (input) => {
	const bool = input === "true" ? true : input === "false" ? false : void 0;
	if (typeof bool !== "boolean") return {
		ok: false,
		errors: ["type"]
	};
	return {
		ok: true,
		value: bool
	};
};
var enumValidator = ({ values }) => (input) => {
	if (!(typeof input === "string" ? values.includes(input) : false)) return {
		ok: false,
		errors: ["type"]
	};
	return {
		ok: true,
		value: input
	};
};
function selectValidator(options) {
	switch (options.type) {
		case "string": return stringValidator(options);
		case "number": return numberValidator(options);
		case "boolean": return booleanValidator;
		case "enum": return enumValidator(options);
	}
}
function validateEnvVariable(value, options) {
	const isOptional = options.optional || options.default !== void 0;
	if (isOptional && value === void 0) return {
		ok: true,
		value: options.default
	};
	if (!isOptional && value === void 0) return {
		ok: false,
		errors: ["missing"]
	};
	return selectValidator(options)(value);
}
//#endregion
//#region \0virtual:astro:env/internal
var schema = {
	"WP_URL": {
		"context": "server",
		"access": "public",
		"optional": true,
		"default": "https://core.croilab.com",
		"type": "string"
	},
	"WP_APP_USER": {
		"context": "server",
		"access": "secret",
		"optional": true,
		"type": "string"
	},
	"WP_APP_PASSWORD": {
		"context": "server",
		"access": "secret",
		"optional": true,
		"type": "string"
	}
};
//#endregion
//#region \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === "" ? void 0 : rawVariable;
	const options = schema[key];
	const result = validateEnvVariable(variable, options);
	if (result.ok) return result.value;
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};
setOnSetGetEnv(() => {
	WP_APP_USER = _internalGetSecret("WP_APP_USER");
	WP_APP_PASSWORD = _internalGetSecret("WP_APP_PASSWORD");
});
var WP_URL = "https://core.croilab.com";
var WP_APP_USER = _internalGetSecret("WP_APP_USER");
var WP_APP_PASSWORD = _internalGetSecret("WP_APP_PASSWORD");
//#endregion
//#region src/lib/wp.ts
/**
* Capa de acceso a WordPress como Headless CMS (REST API v2).
*
* Todos los fetch de contenido pasan por `wpFetch` / `collection` para
* centralizar la URL base, autenticación opcional y el manejo de errores.
*
* Cada accessor tiene una versión con fallback a los datos locales de
* `src/data/` (que actúan como respaldo durante el build si WordPress
* está inalcanzable o aún no tiene contenido).
*/
var WP_API_BASE = `${WP_URL.replace(/\/$/, "")}/wp-json`;
function authHeaders() {
	if (WP_APP_USER && WP_APP_PASSWORD) {
		const credentials = `${WP_APP_USER}:${WP_APP_PASSWORD}`;
		return { Authorization: `Basic ${Buffer.from(credentials).toString("base64")}` };
	}
	return {};
}
async function wpFetch(path, params = {}) {
	const query = new URLSearchParams(params);
	const response = await fetch(`${WP_API_BASE}${path}${query.size ? `?${query}` : ""}`, { headers: {
		"Content-Type": "application/json",
		...authHeaders()
	} });
	if (!response.ok) throw new Error(`WordPress API ${response.status} ${response.statusText}: ${path}`);
	return response.json();
}
/** Fetch de colección con paginación (X-WP-Total). */
async function wpCollection(postType, params = {}) {
	const all = [];
	let page = 1;
	let totalPages = 1;
	do {
		const query = new URLSearchParams({
			per_page: "100",
			page: String(page),
			_embed: "true",
			...params
		});
		const response = await fetch(`${WP_API_BASE}/wp/v2/${postType}?${query}`, { headers: {
			"Content-Type": "application/json",
			...authHeaders()
		} });
		if (!response.ok) throw new Error(`WordPress API ${response.status} ${response.statusText}: /${postType}`);
		const items = await response.json();
		all.push(...items);
		totalPages = Number(response.headers.get("X-WP-TotalPages")) || 1;
		page += 1;
	} while (page <= totalPages);
	return {
		items: all,
		total: all.length,
		totalPages
	};
}
/** Helper seguro: resuelve con fallback si el fetch falla. */
function getWpPosts(params = {}) {
	return wpCollection("posts", params);
}
function getWpCases(params = {}) {
	return wpCollection("casos", params);
}
function getWpTestimonials(params = {}) {
	return wpCollection("testimonios", params);
}
function getWpServices(params = {}) {
	return wpCollection("servicios", params);
}
async function getWpServiceBySlug(slug) {
	const { items } = await wpCollection("servicios", {
		slug,
		_embed: "1"
	});
	return items[0] ?? null;
}
function getWpProjects(params = {}) {
	return wpCollection("proyectos", params);
}
function getWpSettings() {
	return wpFetch("/croilab/v1/settings");
}
//#endregion
export { getWpServices as a, getWpServiceBySlug as i, getWpPosts as n, getWpSettings as o, getWpProjects as r, getWpTestimonials as s, getWpCases as t };
