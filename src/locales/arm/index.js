function importAll(r) {
  return r.keys().map((v) => ({
    [v.replace('./', '').replace('.json', '')]: r(v),
  }));
}

const armTranslations = importAll(require.context('./', false, /\.(json)$/));

export default armTranslations;
