export function formatViewCount(viewCount) {
    if (viewCount >= 1_000_000_000) {
      return (viewCount / 1_000_000_000).toFixed(1) + "B"; 
    } else if (viewCount >= 1_000_000) {
      return (viewCount / 1_000_000).toFixed(1) + "M";
    } else if (viewCount >= 1_000) {
      return (viewCount / 1_000).toFixed(1) + "K"; 
    } else {
      return viewCount.toString(); 
    }
  }
  