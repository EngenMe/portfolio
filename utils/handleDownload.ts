export const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/EngenMe-Mohamed-Hasnaoui-Web_Dev-CV.pdf";
  link.download = "EngenMe-Mohamed-Hasnaoui-Web_Dev-CV.pdf";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
