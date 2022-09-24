import 'react-native-gesture-handler';
import React from 'react';
import { storage, getLevelsFromRepo } from './src/storage';

import { connect } from 'react-redux';

// class AppContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.setLevels = props.setLevels;
//     this.pushNewLevels = props.pushNewLevels;
//     this.setSelectedLevel = props.setSelectedLevel;
//     this.setDesignerState = props.setDesignerState;
//   }

//   async componentDidMount() {
//     await Promise.all([
//       storage.getObj('levels').then((data) => data !== null && this.setLevels(data)),

//       storage
//         .getObj('selectedLevel')
//         .then((data) =>
//           data !== null ? this.setSelectedLevel(data) : storage.setObj('selectedLevel', this.props.selectedLevel)
//         ),

//       storage.getObj('designer').then((data) => data !== null && this.setDesignerState(data)),
//     ]);

//     await getLevelsFromRepo().then((repoLevels) => {
//       if (repoLevels.length > this.props.levels.length) {
//         let newLevels = [];
//         for (let i = this.props.levels.length; i < repoLevels.length; i++) {
//           newLevels.push(repoLevels[i]);
//         }
//         this.pushNewLevels(newLevels);
//         console.log('getLevelsFromRepo', newLevels);
//       }
//     });
//   }

//   render() {
//     return null;
//   }
// }

// const mapStateToProps = (state) => ({
//   levels: state.levels.levels,
//   selectedLevel: state.levels.selectedLevel,
// });

// import { setLevelsAC, pushNewLevelsAC, setSelectedLevelAC } from './src/redux/levelsReducer';

// import { setDesignerStateAC } from './src/redux/designerReducer';

// const mapDispatchToProps = (dispatch) => ({
//   setLevels: (levels) => dispatch(setLevelsAC(levels)),
//   pushNewLevels: (levels) => dispatch(pushNewLevelsAC(levels)),
//   setSelectedLevel: (selectedLevel) => dispatch(setSelectedLevelAC(selectedLevel)),
//   setDesignerState: (state) => dispatch(setDesignerStateAC(state)),
// });

// const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
