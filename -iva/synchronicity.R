#' Gets synchronicity of vectors
#'
#' @param firstVector First vector
#' @param secondVector Second vector
#' @return Synchronicity
#' @examples
#' getSynchronicity(runif(10), runif(10))
#' @export
getSynchronicity = function(firstVector, secondVector){
  if (length(firstVector) != length(secondVector))
    stop("Error in getting synchronicity. Length of two vector are different.")
  x = c()
  for (i in 1:(length(firstVector) - 1)){
    if (!(is.na(firstVector[i]) || is.na(secondVector[i]) || is.na(firstVector[i+1]) || is.na(secondVector[i+1])))
      if (firstVector[i] > firstVector[i+1] && secondVector[i] > secondVector[i+1] |
          firstVector[i] < firstVector[i+1] && secondVector[i] < secondVector[i+1] |
          firstVector[i] == firstVector[i+1] && secondVector[i] == secondVector[i+1] ) {
        x = c(x, 1)
      } else {
        x = c(x, 0)
      }
    else {}
  }
  return (mean(x))
}
#.
