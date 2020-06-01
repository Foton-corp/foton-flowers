function importAll(r) {
  return r.keys().map((v) => ({
    [v.replace('./', '').replace('.json', '')]: r(v),
  }));
}

const ruTranslations = importAll(require.context('./', false, /\.(json)$/));

export default ruTranslations;
