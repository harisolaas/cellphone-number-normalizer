export function normalize(cellphoneList: FormDataEntryValue | null) {
  if (typeof cellphoneList !== "string") {
    throw new Error();
  }

  return cellphoneList.split(/\r?\n|\r|\n/g).map((c) => {
    let valid = true;

    // Remove all non-numeric values
    c = c.replace(/[^0-9]/g, "");

    // Remove the declared list from starting position
    const invalidStarts = ["549", "540", "54", "00", "0", "9"];
    for (let i = 0; i < invalidStarts.length; i++) {
      const is = invalidStarts[i];
      if (c.startsWith(is)) {
        c = c.replace(is, "");
        break;
      }
    }

    // If number length is less than 10 it cannot be normalized
    if (c.length < 10) {
        return { value: c, valid: false };
    }
    
    // Numbers that are left with 10 digits and start with 11 are ready
    if (c.length === 10) {
      if (c.startsWith("15")) {
        c = c.replace("15", "11");
      }
      return { value: c, valid: true };
    }

    // If an item has more than 10 digits try to remove the first
    // occurrence of 15 and see if it's left at 10 digits
    c = c.replace("15", "");

    if (c.length !== 10) {
      valid = false;
    }

    return { value: c, valid };
  });
}
