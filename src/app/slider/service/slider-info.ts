export interface Slider {
  number: string;

  name: string;

  description: string;

  image: string;

  width: number;

  height: number;

  countId: number | undefined;

  sort: number;

  lastChangeTime: number | undefined;
}

export interface ListSliderResponse {
  sliders: Slider[];
}

export const Slider = {
  fromJSON(object: any): Slider {
    return {
      number: isSet(object.number) ? String(object.number) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      image: isSet(object.image) ? String(object.image) : "",
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      countId: isSet(object.countId) ? Number(object.countId) : undefined,
      sort: isSet(object.sort) ? Number(object.sort) : 0,
      lastChangeTime: isSet(object.lastChangeTime)
        ? Number(object.lastChangeTime)
        : undefined,
    };
  },
};

export const ListSliderResponse = {
  fromJson(object: any): ListSliderResponse {
    return {
      sliders: Array.isArray(object)
        ? object.map((e: any) => Slider.fromJSON(e))
        : [],
    };
  },
};

function isSet(value: any): boolean {
  return value !== null || value !== undefined;
}
