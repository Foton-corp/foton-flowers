function importAll(r) {
  return r.keys().map((v) => ({
    [v.replace('./', '').replace('.json', '')]: r(v),
  }));
}

const enTranslations = importAll(require.context('./', false, /\.(json)$/));

export default enTranslations;
