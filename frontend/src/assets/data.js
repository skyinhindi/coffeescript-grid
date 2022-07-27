const logo_base_64 =
  "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";

export default logo_base_64;
