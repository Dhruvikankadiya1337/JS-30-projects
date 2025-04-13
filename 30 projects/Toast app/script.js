function showToast(type) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
  
    let icon = '';
    let message = '';
  
    if (type == "success") {
      icon = '✅';
      message = "Success! Everything worked.";
    } else if (type == "error") {
      icon = '❌';
      message = "Error! Something went wrong.";
    } else if (type == "warning") {
      icon = '⚠️';
      message = "Warning! Please be cautious.";
    }
  
    toast.innerHTML = `
      <span class="icon">${icon}</span>
      <span class="message">${message}</span>
      <button class="close" onclick="this.parentElement.remove()">×</button>
      <div class="progress"></div>
    `;
  
    document.getElementById("toast-container").appendChild(toast);
  
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  
  