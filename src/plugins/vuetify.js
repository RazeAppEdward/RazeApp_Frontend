import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F7444E',
                secondary: '#002C3E',
                accent: '#ffffff'
            }
        }
    },
    icons:{
        iconfont:'md'|| 'fa'
    }
});
