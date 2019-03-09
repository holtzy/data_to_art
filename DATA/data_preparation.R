####
# Data Preparation
#
# This R script reads data sent by Oleguer and create all the inputs for the d3.js charts
#
# Run it with --> Rscript data_preparation.R
###

## setwd("~/Desktop/Mortality/DATA")

# Libraries
library(dplyr)
library(tidyr)
library(jsonlite)

# Lost Years of Life = LYL File
LYL <- read.table("LYL.txt", header=T)
#improve colnames
colnames(LYL) <- c("mentalDis", "COD", "sex", "n", "LYL")
# Circulatory Diseases, not heart disease or something like that
LYL$COD <- gsub("Dis. Circulatory System", "Circulatory Diseases", LYL$COD)
# Save this long format
tosave <- paste("data_LYL_long = ", toJSON(LYL))
fileConn<-file("LYLlong.js")
writeLines(tosave, fileConn)
close(fileConn)
# get a wide format
wide <- LYL %>%
  filter(n>3) %>%
  select(mentalDis, sex, COD, LYL) %>%
  spread(COD, LYL, -4, fill=0)
tosave <- paste("data_LYL = ", toJSON(wide))
fileConn<-file("LYL.js")
writeLines(tosave, fileConn)
close(fileConn)


# Mortality Rate ratio = MRR. It compares the number of death with or without mental disorder. If > 1 -> people with a mental disorder dye more often.
MRR <- read.table("MRR.txt", header=T)
clean <- MRR %>%
  filter(!is.na(MRR)) %>%
  select(sex, dx2, cod_label, MRR, MRR_left, MRR_right)
colnames(clean) <- c("sex", "mentalDis", "COD", "MRR", "MRR_left", "MRR_right")
# Special case for circulatory diseases
clean$COD <- gsub("Dis. Circulatory System", "Circulatory Diseases", clean$COD)
tosave <- paste("data_MRR = ", toJSON(clean))
fileConn<-file("MRR.js")
writeLines(tosave, fileConn)
close(fileConn)


# MRR age -> Same thing but split by age Range
MRRage <- read.table("MRR_age.txt", header=T)
clean <- MRRage
tosave <- paste("data_MRRage = ", toJSON(clean))
fileConn<-file("MRRage.js")
writeLines(tosave, fileConn)
close(fileConn)












a = clean %>% 
  filter(dx2 == "Any Disorder") %>% 
  filter(cod_label == "All Causes") %>%
  filter(sex2 == "Males") %>%
  select(specific, irr, left, right)

colnames(a) = c("x", "y", "CI_left", "CI_right")
a$y = round(a$y, 2)
a$CI_left = round(a$CI_left, 2)
a$CI_right = round(a$CI_right, 2)
a$CI_right = 1.25*a$CI_right
a$CI_left = 0.8*a$CI_left
a
write.table(a, file="~/Desktop/D3-graph-gallery/DATA/data_IC.csv", sep=",", row.names = F, quote=F)



asummary()

