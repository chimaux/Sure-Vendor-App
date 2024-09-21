import { onboard_tab_type, onboard_tab_type_v2 } from '@/types/welcome'
import { create } from 'zustand'





const useOnboardingStore = create<onboard_tab_type_v2>((set) => ({
    onboard_tab: {
        tab1:true,
        tab2:false,
        tab3:false,
    
      },
      set_onboarding_tab: (state:onboard_tab_type) => set({ onboard_tab: state }),

    
    
}))

export default useOnboardingStore