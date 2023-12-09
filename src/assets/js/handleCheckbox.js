export function handleCheckboxChange(checkbox) {
  // Handle direction checkboxes
  if (checkbox === 'left' && this.filter.right) {
    this.filter.right = false;
  } else if (checkbox === 'right' && this.filter.left) {
    this.filter.left = false;
  }

  // Handle continent checkboxes
  else if (['europe', 'asia', 'na', 'sa', 'africa', 'australia', 'antarctica'].includes(checkbox)) {
      // Reset all continent filters except the selected one
      for (const continent of ['europe', 'asia', 'na', 'sa', 'africa', 'australia', 'antarctica']) {
        if (continent !== checkbox) {
          this.filter[continent] = false;
        }
      }
    }
}