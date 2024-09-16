export function parseDurationISO(durationISO) {
    // Duration is in ISO 8601 format (e.g., PT1H2M10S)
    const match = durationISO.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (match) {
      const hours = match[1] ? parseInt(match[1], 10) : 0;
      const minutes = match[2] ? parseInt(match[2], 10) : 0;
      const seconds = match[3] ? parseInt(match[3], 10) : 0;
  
      return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
    }
    return 'Unknown duration';
  }