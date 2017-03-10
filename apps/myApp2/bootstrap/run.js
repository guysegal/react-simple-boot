import {sequence, parallel} from '../../../react-simple-boot';

export default (props, measure) => 
    sequence([
        measure("configureStore", require('./steps/configureStore').default),
        measure("syncStep1", require('./steps/syncStep1').default),
        measure("syncStep2", require('./steps/syncStep2').default),       
        
        parallel([
            measure("listenerStep", require('./steps/listenerStep').default),
            measure("asyncStep1", require('./steps/asyncStep1').default),
            measure("asyncStep2", require('./steps/asyncStep2').default),
            measure("asyncStep3", require('./steps/asyncStep3').default)
       ])      
  ]);