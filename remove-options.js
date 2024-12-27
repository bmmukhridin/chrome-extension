// Function to filter dropdown options
function filterCarrierDropdown() {
    const carrierDropdown = document.querySelector('select[name="CarrierID"]');
    if (carrierDropdown) {
        // Keep only USPS and UPS options
        const allowedValues = ["1", "3"]; // Replace with the actual value attributes for USPS and UPS

        // Remove options that are not in the allowed list
        Array.from(carrierDropdown.options).forEach(option => {
            if (!allowedValues.includes(option.value)) {
                option.remove();
            }
            allowedValues[0].selected = true
        });
        if (carrierDropdown.options.length > 0) {
            carrierDropdown.options["1"].selected = true;
        }
    }
}

// Use MutationObserver to detect changes in the DOM
const observer = new MutationObserver(() => {
    filterCarrierDropdown();
});

// Start observing the body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Also run the script immediately when loaded
document.addEventListener("DOMContentLoaded", filterCarrierDropdown);
