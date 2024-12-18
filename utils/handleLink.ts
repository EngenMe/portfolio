export const handleLink = (link: string, isBlankTarget = false) => {
  if (isBlankTarget) {
    window.open(link, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = link;
  }
};
