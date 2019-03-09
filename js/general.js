// List of mental disorders
allDisorder = ["Organic Disorders","Substance Use","Schizophrenia","Mood Disorders", "Neurotic Disorders","Eating Disorders", "Personality Disorders", "Intellectual Disabilities", "Developmental Disorders", "Behavioral Disorders", "Any Disorder"]

// List of the cause of Death
allCOD = ["Suicide",
              "Accidents",
              "Homicide",
          "Infectious Diseases",
              "Neoplasms",
              "Diabetes Mellitus",
              "Circulatory Diseases",
              "Respiratory Diseases",
              "Digestive Diseases",
              "Alcohol Misuse",
              "Other Causes"
          ]
typeCOD = ["Natural Causes","Unnatural Causes","All Causes"]
bothCOD = ["All Causes",
            "Unnatural Causes",
              "Suicide",
              "Homicide",
              "Accidents",
            "Natural Causes",
              "Alcohol Misuse",
              "Other Causes",
              "Infectious Diseases",
              "Respiratory Diseases",
              "Diabetes Mellitus",
              "Digestive Diseases",
              "Circulatory Diseases",
              "Neoplasms"
          ]

// Color scale for type of death
colCOD1 = "steelblue"
colCOD2 = "#A7729A"
colCOD3 = "#518FF0"
vec = [colCOD1,
            colCOD2,
              colCOD2,
              colCOD2,
              colCOD2,
            colCOD3,
              colCOD3,
              colCOD3,
              colCOD3,
              colCOD3,
              colCOD3,
              colCOD3,
              colCOD3,
              colCOD3
          ]
myColorCOD = d3.scaleOrdinal()
  .domain(bothCOD)
  .range(vec)
