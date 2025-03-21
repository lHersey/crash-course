/**
 * Módulo de Tipos Base para Redux
 *
 * Este módulo define los tipos genéricos fundamentales para:
 * - Acciones básicas de Redux
 * - Acciones con payload
 * - Tipado fuerte para el sistema de acciones
 */

/**
 * Tipo genérico para acciones simples sin payload
 *
 * @template TipoDeAction - String literal que representa el tipo de acción
 * @example
 * type MiAccion = Action<'INCREMENTAR'>;
 */
export type Action<TipoDeAction extends string> = {
  type: TipoDeAction;
};

/**
 * Tipo genérico para acciones que requieren datos adicionales (payload)
 *
 * @template TipoDeAction - String literal que representa el tipo de acción
 * @template TipoPayload - Tipo de datos que contendrá el payload
 * @example
 * type MiAccionConDatos = ActionPayload<'ESTABLECER_VALOR', number>;
 */
export type ActionPayload<TipoDeAction extends string, TipoPayload> = {
  type: TipoDeAction;
  payload: TipoPayload;
};
