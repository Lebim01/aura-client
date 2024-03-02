export function humanizeDate(dateObject: any): any {
  const givenDate: any = new Date(
    Date.UTC(
      dateObject.year,
      dateObject.month - 1,
      dateObject.day,
      dateObject.hour,
      dateObject.minute,
      dateObject.second
    )
  );

  const now: any = new Date();
  const diffInSeconds = Math.abs(Math.floor((now - givenDate) / 1000));
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) {
    return "hace unos segundos";
  } else if (diffInMinutes < 60) {
    return `hace ${diffInMinutes} minuto${diffInMinutes > 1 ? "s" : ""}`;
  } else if (diffInHours < 24) {
    return `hace ${diffInHours} hora${diffInHours > 1 ? "s" : ""}`;
  } else if (diffInDays < 7) {
    return `hace ${diffInDays} día${diffInDays > 1 ? "s" : ""}`;
  } else if (diffInWeeks < 4) {
    return `hace ${diffInWeeks} semana${diffInWeeks > 1 ? "s" : ""}`;
  } else if (diffInMonths < 12) {
    return `hace ${diffInMonths} mes${diffInMonths > 1 ? "es" : ""}`;
  } else {
    return `hace ${diffInYears} año${diffInYears > 1 ? "s" : ""}`;
  }
}
