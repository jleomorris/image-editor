export const DEFAULT_OPTIONS = [
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Invert',
    property: 'invert',
    value: 0,
    range: {
      min: 0,
      max: 1
    },
    unit: ''
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
]

export const filterPresets = () => {
  return [
    {
      name: "Default",
      filters: [
        {
          name: 'Blur',
          property: 'blur',
          value: 0,
          range: {
            min: 0,
            max: 20
          },
          unit: 'px'
        },
        {
          name: 'Brightness',
          property: 'brightness',
          value: 100,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Contrast',
          property: 'contrast',
          value: 100,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Grayscale',
          property: 'grayscale',
          value: 0,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
        {
          name: 'Hue Rotate',
          property: 'hue-rotate',
          value: 0,
          range: {
            min: 0,
            max: 360
          },
          unit: 'deg'
        },
        {
          name: 'Invert',
          property: 'invert',
          value: 0,
          range: {
            min: 0,
            max: 1
          },
          unit: ''
        },
        {
          name: 'Saturation',
          property: 'saturate',
          value: 100,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Sepia',
          property: 'sepia',
          value: 0,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
      ],
    },
    {
      name: "Relaxed",
      filters: [
        {
          name: 'Blur',
          property: 'blur',
          value: 0,
          range: {
            min: 0,
            max: 20
          },
          unit: 'px'
        },
        {
          name: 'Brightness',
          property: 'brightness',
          value: 125,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Contrast',
          property: 'contrast',
          value: 55,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Grayscale',
          property: 'grayscale',
          value: 0,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
        {
          name: 'Hue Rotate',
          property: 'hue-rotate',
          value: 0,
          range: {
            min: 0,
            max: 360
          },
          unit: 'deg'
        },
        {
          name: 'Invert',
          property: 'invert',
          value: 0,
          range: {
            min: 0,
            max: 1
          },
          unit: ''
        },
        {
          name: 'Saturation',
          property: 'saturate',
          value: 100,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Sepia',
          property: 'sepia',
          value: 0,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
      ],
    },
    {
      name: "Vintage",
      filters: [
        {
          name: 'Blur',
          property: 'blur',
          value: 0,
          range: {
            min: 0,
            max: 20
          },
          unit: 'px'
        },
        {
          name: 'Brightness',
          property: 'brightness',
          value: 110,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Contrast',
          property: 'contrast',
          value: 110,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Grayscale',
          property: 'grayscale',
          value: 90,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
        {
          name: 'Hue Rotate',
          property: 'hue-rotate',
          value: 0,
          range: {
            min: 0,
            max: 360
          },
          unit: 'deg'
        },
        {
          name: 'Invert',
          property: 'invert',
          value: 0,
          range: {
            min: 0,
            max: 1
          },
          unit: ''
        },
        {
          name: 'Saturation',
          property: 'saturate',
          value: 100,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Sepia',
          property: 'sepia',
          value: 0,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
      ],
    },
    {
      name: "Sepia",
      filters: [
        {
          name: 'Blur',
          property: 'blur',
          value: 0,
          range: {
            min: 0,
            max: 20
          },
          unit: 'px'
        },
        {
          name: 'Brightness',
          property: 'brightness',
          value: 90,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Contrast',
          property: 'contrast',
          value: 110,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Grayscale',
          property: 'grayscale',
          value: 0,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
        {
          name: 'Hue Rotate',
          property: 'hue-rotate',
          value: 0,
          range: {
            min: 0,
            max: 360
          },
          unit: 'deg'
        },
        {
          name: 'Invert',
          property: 'invert',
          value: 0,
          range: {
            min: 0,
            max: 1
          },
          unit: ''
        },
        {
          name: 'Saturation',
          property: 'saturate',
          value: 100,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Sepia',
          property: 'sepia',
          value: 100,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
      ],
    },
    {
      name: "Bright life",
      filters: [
        {
          name: 'Blur',
          property: 'blur',
          value: 0,
          range: {
            min: 0,
            max: 20
          },
          unit: 'px'
        },
        {
          name: 'Brightness',
          property: 'brightness',
          value: 150,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Contrast',
          property: 'contrast',
          value: 140,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Grayscale',
          property: 'grayscale',
          value: 0,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
        {
          name: 'Hue Rotate',
          property: 'hue-rotate',
          value: 0,
          range: {
            min: 0,
            max: 360
          },
          unit: 'deg'
        },
        {
          name: 'Invert',
          property: 'invert',
          value: 0,
          range: {
            min: 0,
            max: 1
          },
          unit: ''
        },
        {
          name: 'Saturation',
          property: 'saturate',
          value: 150,
          range: {
            min: 0,
            max: 200
          },
          unit: '%'
        },
        {
          name: 'Sepia',
          property: 'sepia',
          value: 0,
          range: {
            min: 0,
            max: 100
          },
          unit: '%'
        },
      ],
    }
  ]
}