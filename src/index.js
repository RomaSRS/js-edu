/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

      let hoursEcosystemRelatedTools = 800;
      let hoursToBasicProgramming = 1300;
      let weeks = 0;

      if (knowsProgramming) {
        weeks = hoursEcosystemRelatedTools / config[focus];}
        else {
          weeks = hoursToBasicProgramming / config[focus];}
      
      return Math.ceil(weeks);
  };
  