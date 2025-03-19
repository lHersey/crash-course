export type Action<TipoDeAction extends string> = {
  type: TipoDeAction;
};

export type ActionPayload<TipoDeAction extends string, TipoPayload> = {
  type: TipoDeAction;
  payload: TipoPayload;
};
