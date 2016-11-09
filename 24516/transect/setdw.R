#===============================================================================
# Name   : Set the absolute path of the project to dropbox for different workstations
# Author : tmeits
# Date   : 26.10.2016
#===============================================================================

## Set work path
getOsVersion <- function() {
    sysinf <- Sys.info()
    if (!is.null(sysinf)) 
        osVersion <- sysinf["version"] else stop("mystery machine...")
    return(osVersion)
}
getOsVersion()

# Installation of a working directory
setWorkDir <- function(osVersion) {
    if (osVersion == "build 2600, Service Pack 3") 
        setwd("Z:/home/larisa/Dropbox/24516/transect/")
    else if (osVersion == "#32-Ubuntu SMP Fri Apr 16 08:10:02 UTC 2010")
        setwd("/home/larisa/Dropbox/24516/transect/")
    else if (osVersion == "build 7601, Service Pack 1")
        setwd("C:/Users/IVA/Dropbox/24516/transect/") else stop("mystery...")
    return(getwd())
}
mm_path <- setWorkDir(getOsVersion())
mm_path
        
# Installation of a working directory
setWorkDir2 <- function(osVersion) {
    if (osVersion == "build 2600, Service Pack 3") 
        setwd("Z:/home/larisa/Dropbox/24516/nnet_transect/")
    else if (osVersion == "#32-Ubuntu SMP Fri Apr 16 08:10:02 UTC 2010")
        setwd("/home/larisa/Dropbox/24516/nnet_transect/")
    else if (osVersion == "build 7601, Service Pack 1")
        setwd("C:/Users/IVA/Dropbox/24516/nnet_transect/") else stop("mystery...")
    return(getwd())
}        
nnet_path <- setWorkDir2(getOsVersion())
        
# knitr: run all chunks in an Rmarkdown document                              
runAllChunks <- function(rmd, envir = globalenv()) {
    tempR <- tempfile(tmpdir = ".", fileext = ".R")
    on.exit(unlink(tempR))
    knitr::purl(rmd, output = tempR)
    sys.source(tempR, envir = envir)
    unlink(tempR)
}
Rmd2R <- function(rmdFile, RFile) {
    require(knitr)
    knitr::purl(rmdFile, RFile)
}
#runAllChunks("transect.Rmd")
.TT <- TRUE
#Rmd2R("cli2par.Rmd", output = "cli2par.R")



