export function breadcrumbsForSlug(menu, slugStr, path) {
  path = path ? path : [];
  menu.forEach((obj) => {
    if (urlInChildren(obj, slugStr)) {
      path.push({
        name: obj.name,
        url: obj.url,
        icon: obj.icon,
        color: obj.color,
      });
      if (obj.children && obj.children.length > 0) {
        breadcrumbsForSlug(obj.children, slugStr, path);
      }
    }
  });
  return path;
}

export function urlInChildren(menu, slugStr) {
  let found = false;
  if (menu.url && menu.url === slugStr) {
    found = true;
  }
  if (!found && menu.children && menu.children.length > 0) {
    for (const index in menu.children) {
      if (found) {
        continue;
      }
      found = urlInChildren(menu.children[index], slugStr);
    }
  }
  return found;
}

export function getPreviousNextFromMenu(menu, slugStr, parent) {
  let current, prev, next;

  for (let index = 0; index < menu.length; index++) {
    // If we are inside top-level category, point them to the next top-level category
    if (current && !next) {
      next = menu[index];
    }
    if (current) {
      continue;
    }

    // For top-level categories
    if (menu[index].url === slugStr) {
      // If we are NOT on the first top-level category point the previous arrow
      // to the previous parent
      if (index < 1) {
        prev = parent;
      } else {
        prev = menu[index - 1];
      }

      // If we are on a top-level category, the next item should be its first child
      if (parseInt(menu[index].depth) === 0) {
        next = menu[index].children[0];
      }

      // If we are on a sub item that's expandable, then its first item should be its direct descendant
      if (menu[index].children && menu[index].children.length > 0) {
        next = menu[index].children[0];
      }

      current = menu[index];
    }

    // Calculate For sub-level items within top-level categories
    else if (menu[index].children && menu[index].children.length > 0) {
      ({ current, prev, next } = getPreviousNextFromMenu(
        menu[index].children,
        slugStr,
        menu[index]
      ));
    }
  }

  return { current, prev, next };
}

export const checkDropdownStatus = (
  routerPath: string,
  menuKey: string
): boolean => {
  return routerPath.split("/").indexOf(menuKey) !== -1;
};

export const getCategoryByIndex = (item: string, index: number) => {
  return item.split("/")[index];
};
