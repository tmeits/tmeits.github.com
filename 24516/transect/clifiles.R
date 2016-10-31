# ===============================================================================
# Name : downloadable list of files containing climatic measurement Author :
# tmeits Date : 26.10.2016
# ===============================================================================
source("http://tmeits.github.io/24516/transect/setdw.R")

# 
getStationCode <- function(listFiles) {
    len <- length(listFiles)
    if (len != 0) {
        listCodes <- c(1:len)
        for (i in listCodes) {
            listCodes[i] <- as.numeric(substr(listFiles[i], 1, 5))
        }
    } else stop("An empty list of files!")
    
    return(as.numeric(listCodes))
}

altai.path <- "cli/altai"
altai.files <- list.files(pattern = "\\.txt$", path = altai.path, ignore.case = TRUE, 
    recursive = FALSE, full.names = FALSE)
altai.code <- getStationCode(altai.files)
#todo
# altai.names <- getStationNames

lena.path <- "cli/lena"
lena.files <- list.files(pattern = "\\.txt$", path = lena.path, ignore.case = TRUE, 
    recursive = FALSE, full.names = FALSE)
lena.code <- getStationCode(lena.files)


north.path <- "cli/north"
north.files <- list.files(pattern = "\\.txt$", path = north.path, ignore.case = TRUE)
north.code <- getStationCode(north.files)

yenisei.path <- "cli/yenisei"
yenisei.files <- list.files(pattern = "\\.txt$", path = yenisei.path, ignore.case = TRUE)
yenisei.code <- getStationCode(yenisei.files)

aisori.path <- "cli/aisori"
aisori.files <- list.files(pattern = "\\.txt$", path = aisori.path, ignore.case = TRUE)
aisori.code <- getStationCode(aisori.files)

all.path <- c(alati.path, lena.path, north.path, yenisei.path, aisori.path)
all.files <- c(altai.files, lena.files, north.files, yenisei.files, aisori.files)
all.code <- getStationCode(all.files)













