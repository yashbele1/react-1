export const inpDivs = [
  { label: 'First Name', id: 'fn' },
  { label: 'Last Name', id: 'ln' },
  { label: 'Phone Number', id: 'pn' },
  { label: 'Email Address', id: 'ea' },
];

// CHECKS // CHECKS // CHECKS
export const fnx = (fn) => {
  if (!fn) return;
  const fnTrim = fn.trim();
  const fnFormat = fnTrim[0].toUpperCase() + fnTrim.substring(1).toLowerCase();
  const check = new RegExp('(?=.*[^A-Za-z])').test(fnFormat);
  if (check) return;
  return fnFormat;
};

export const lnx = (ln) => {
  if (!ln) return;
  const lnTrim = ln.trim();
  const lnFormat = lnTrim[0].toUpperCase() + lnTrim.substring(1).toLowerCase();
  const check = new RegExp('(?=.*[^A-Za-z])').test(lnFormat);
  if (check) return;
  return lnFormat;
};

export const pnx = (pn) => {
  if (!pn) return;
  const pnTrim = pn.trim();
  const check = new RegExp('(?=.*[^0-9])').test(pnTrim);
  if (check) return;
  return pnTrim;
};

export const eax = (ea) => {
  if (!ea) return;
  const eaTrimFormat = ea.trim().toLowerCase();
  const check = /\S+@\S+\.\S+/.test(eaTrimFormat);
  if (!check) return;
  return eaTrimFormat;
};
