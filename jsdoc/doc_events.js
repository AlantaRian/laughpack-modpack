/**
 * 
 * @typedef EventJS
 * @type {Object}
 * @property {boolean} cancelled
 * @property {Object} class
 * @property {function} canCancel
 * @property {function} cancel
 * @property {function} equals
 * @property {function} getClass
 * @property {function} hashCode
 * @property {function} isCancelled
 * @property {function} toString
 * @property {function} wait
 * @property {function(ScriptType,string,string):boolean} post
 **/

/**
 * 
 * @typedef AddJEISubtypesEventJS
 * @type {Object}
 * @property {function} registerInterpreter
 * @property {function} useNBT
 * @property {function} useNBTKey
 **/

/**
 * 
 * @typedef InformationJEIEventJS
 * @type {Object}
 * @property {function} add
 * @property {function} addForType
 **/

/**
 * 
 * @typedef HideJEIEventJS
 * @type {Object}
 * @property {Object} allIngredients
 * @property {function} getAllIngredients
 * @property {function} hide
 * @property {function} hideAll
 * @property {function} notify
 * @property {function} notifyAll
 **/

/**
 * 
 * @typedef HideCustomJEIEventJS
 * @type {Object}
 * @property {function} get
 * @property {function} getClass
 * @property {function} notify
 * @property {function} notifyAll
 **/

/**
 * 
 * @typedef YeetJEICategoriesEvent
 * @type {Object}
 * @property {Object} categories
 * @property {Object} categoryIds
 * @property {function} getCategories
 * @property {function} getCategoryIds
 * @property {function} notify
 * @property {function} notifyAll
 * @property {function} yeet
 * @property {function} yeetIf
 **/

/**
 * 
 * @typedef AddJEIEventJS
 * @type {Object}
 * @property {function} add
 * @property {function} notify
 * @property {function} notifyAll
 **/

/**
 * 
 * @typedef CommandEventJS
 * @type {Object}
 * @property {Object} exception
 * @property {Object} parseResults
 * @property {ServerJS} server
 * @property {function} getClass
 * @property {function} getException
 * @property {function} getParseResults
 * @property {function} getServer
 * @property {function} notify
 * @property {function} notifyAll
 * @property {function} setException
 * @property {function} setParseResults
 * 
 **/

/**
 * Recipe filter using a json-like structure.
 * @typedef {Object.<string, any>} RecipeFilter
 * 
**/

/**
 * Wrapper around recipe type accessors. May have mod integration keys like create.
 * @typedef {Object} RecipesAccessor
 * @property {function(...*):RecipeJS} blasting Recipe Type
 * @property {function(...*):RecipeJS} campfireCooking Recipe Type
 * @property {function(...*):RecipeJS} shaped Recipe Type
 * @property {function(...*):RecipeJS} shapeless Recipe Type
 * @property {function(...*):RecipeJS} smelting Recipe Type
 * @property {function(...*):RecipeJS} smithing Recipe Type
 * @property {function(...*):RecipeJS} smoking Recipe Type
 * @property {function(...*):RecipeJS} stonecutting Recipe Type
 * @property {function(...*):RecipeJS} custom Allows any other modded recipe types.
 * @property {function(...*):RecipeJS} create Create mod recipe types.
 * 
**/

/**
 * @typedef RecipeEventJS
 * @type {Object}
 * @property {RecipesAccessor} recipes
 * @property {undefined} itemErrors
 * @property {undefined} recipeFunction
 * @property {function(RecipeJS,RecipeTypeJS,ListJS):RecipeJS} addRecipe
 * @property {function(RecipeFilter):RecipeFilter} customFilter
 * @property {function(RecipeFilter):number} countRecipes
 * @property {function(RecipeFilter):number} remove
 * @property {function(RecipeFilter,function):Void} forEachRecipe
 * @property {function(RecipeFilter,function):Void} forEachRecipeAsync
 * @property {function(...*):RecipeJS} blasting Recipe Type
 * @property {function(...*):RecipeJS} campfireCooking Recipe Type
 * @property {function(...*):RecipeJS} shaped Recipe Type
 * @property {function(...*):RecipeJS} shapeless Recipe Type
 * @property {function(...*):RecipeJS} smelting Recipe Type
 * @property {function(...*):RecipeJS} smithing Recipe Type
 * @property {function(...*):RecipeJS} smoking Recipe Type
 * @property {function(...*):RecipeJS} stonecutting Recipe Type
 * @property {function(...*):RecipeJS} custom Allows any other modded recipe types.
 * @property {function} getBlasting
 * @property {function} getCampfireCooking
 * @property {function} getRecipeFunction
 * @property {function} getRecipes
 * @property {function} getShaped
 * @property {function} getShapeless
 * @property {function} getSmelting
 * @property {function} getSmithing
 * @property {function} getSmoking
 * @property {function} getStonecutting
 * @property {function} printExamples
 * @property {function} printTypes
 * @property {function} replaceInput
 * @property {function} replaceOutput
 * @property {function} setItemErrors
 * @property {function} stage
 * 
**/

/**
 * Function called when a KubeJS event fires.
 * @callback KubeJSEventCallback
 * @param {any} e
 * @return {Void}
**/

/**
 * KubeJS event subscription.
 * @global
 * @param {string} event
 * @param {KubeJSEventCallback} callback
**/
var onEvent = function(event, callback) {}