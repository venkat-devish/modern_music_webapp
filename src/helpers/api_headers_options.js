export const recommendationOptions = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/songs/list-recommendations",
  params: { key: "484129036", locale: "en-US" },
  headers: {
    "X-RapidAPI-Key": "bae03558bamsh6c1f64b36ee8788p1a0797jsncab887d76ace",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export const globalHitsOptions = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: { locale: "en-US", pageSize: "20", startFrom: "0" },
  headers: {
    "X-RapidAPI-Key": "bae03558bamsh6c1f64b36ee8788p1a0797jsncab887d76ace",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};
