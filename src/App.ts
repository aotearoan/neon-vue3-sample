import { computed, defineComponent, ref } from 'vue';
import {
    NeonAlert,
    NeonButton,
    NeonFooter,
    NeonGrid,
    NeonGridArea,
    NeonMode,
    NeonPage,
    NeonTopNav,
    NeonLogo,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonCardFooter,
    NeonAlertService,
    NeonToastService,
    NeonVerticalPosition,
    NeonResponsive,
} from '@aotearoan/neon';
import type { NeonGridModel } from '@aotearoan/neon';

export default defineComponent({
    name: 'App',
    components: {
        NeonAlert,
        NeonPage,
        NeonButton,
        NeonFooter,
        NeonTopNav,
        NeonGrid,
        NeonGridArea,
        NeonLogo,
        NeonCard,
        NeonCardHeader,
        NeonCardBody,
        NeonCardFooter,
    },
    setup() {
        const selectedMode = ref(NeonMode.Dark);

        const layouts = computed((): NeonGridModel[] => {
            return [
                {
                    breakpoint: NeonResponsive.LargerThanTablet,
                    grid: [['page-content1', 'page-content2']],
                },
                {
                    breakpoint: NeonResponsive.Tablet,
                    grid: [['page-content1'], ['page-content2']],
                },
            ];
        });

        const setMode = (mode: NeonMode) => {
            document.documentElement.classList.remove(`neon-mode--${selectedMode.value}`);
            document.documentElement.classList.add(`neon-mode--${mode}`);
            selectedMode.value = mode;
        };

        const switchMode = () => {
            setMode(selectedMode.value === NeonMode.Dark ? NeonMode.Light : NeonMode.Dark);
        };
        
        const moarAlerts = () => {
            NeonAlertService.info({ title: 'Alert!', message: 'This is an alert.' });
        };

        const moarToast = () => {
            NeonToastService.success({ title: 'Toast!', placement: NeonVerticalPosition.Bottom });
        };
        
        return {
            layouts,
            switchMode,
            moarAlerts,
            moarToast,
        };
    },
});
