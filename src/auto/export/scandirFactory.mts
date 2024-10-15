import type {UserContextType} from "@fourtune/realm-js"
import {useContext} from "@fourtune/realm-js"

import type {DependenciesType} from "#/auto/DependenciesType.d.mts"

import implementation from "#/auto/implementation.mts"

/* needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#/auto/ImplementationDocType.d.mts"

import {getTypeOfPathFactory} from "@anio-fs/path-type"

/* ImplementationDocType is needed to make doctypes work in LSP */
export function scandirFactory(user : UserContextType = {}) : ImplementationDocType {
	const context = useContext(user)

	const dependencies : DependenciesType = {
		getTypeOfPath: getTypeOfPathFactory(user),
	}

	return async function scandir(...args: Parameters<ImplementationDocType>) : ReturnType<ImplementationDocType> {
		return await implementation(context, dependencies, ...args)
	}
}
