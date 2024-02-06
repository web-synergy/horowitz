export interface IJury {
  id: string;
  name: { ua: string; en: string };
  position?: { ua: string; en: string };
  photo: string;
  text: { ua: string; en: string };
}
