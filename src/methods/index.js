export const findRotationFromPathname = (pathname, menuitems) => {
  for (var i = 0; i < menuitems.length; i++) {
    if (menuitems[i].url === pathname) {
      return menuitems[i].rotation
    }
  }
  return "0deg"
}

export const reverseRotation = rotation => {
  if (rotation.includes("-")) {
    return rotation.replace("-", "")
  } else if (rotation === "0deg") return rotation
  else return "-" + rotation
}
