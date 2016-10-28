# downloadable list of files containing climatic measurements
# the first five characters in the file name represent the code of the weather station
# http://stackoverflow.com/questions/4876813/using-r-to-list-all-files-with-a-specified-extension
readCliFiles <- function() {
    altai.files <- list.files(pattern = "\\.txt$", path = "cli/altai", ignore.case = TRUE,
        recursive = FALSE, full.names = FALSE)
    lena.files <- list.files(pattern = "\\.txt$", path = "cli/lena", ignore.case = TRUE)
    north.files <- list.files(pattern = "\\.txt$", path = "cli/north", ignore.case = TRUE)
    yenisei.files <- list.files(pattern = "\\.txt$", path = "cli/yenisei",
        ignore.case = TRUE)

    all.files <- sort(c(altai.files, lena.files, north.files, yenisei.files))
    return(all.files)
}
#print(readCliFiles())
all.files <- readCliFiles()
