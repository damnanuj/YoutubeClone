
const apiKeys = [
  "AIzaSyBlyYvuHiQoDPCMA_gmP-4WCnUiSxa0iAU",
  "AIzaSyBJrJHRcfvW07ah3ZzVV0xbQ1vKgK8Uy1U",
  "AIzaSyAGK0DOr4rKw4HMX_bd8YQYVtbK1omrCYw",
  "AIzaSyALato09pGN6xcaDRjCE7TEi33h-dOgz1Q",
  "AIzaSyAO-TYd2kVQtS0J1gti4sCmDuQ81-S5m-c",
  "AIzaSyCkKhuzGS5vmf_wreWgVMdhsy-z8teYJeY",
  "AIzaSyCOzdiObyNRRonxDD24O20i0TcZY-dth20",
];

export function getRandomApiKey() {
  const randomIndex = Math.floor(Math.random() * apiKeys.length);
  return apiKeys[randomIndex];
}
