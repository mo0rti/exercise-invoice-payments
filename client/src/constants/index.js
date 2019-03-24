import app from "../../app.json";

export const SERVER_HOST_URL = app.url;
// TODO: Should design an account page which user can define his IBAN
export const DEFAULT_IBAN = app.defaultIBAN;

export default {
  SERVER_HOST_URL,
  DEFAULT_IBAN
}