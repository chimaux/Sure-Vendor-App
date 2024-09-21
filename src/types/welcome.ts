export interface what_we_do_list_type {
  icon: string;
  text: string;
}

export interface onboard_tab_type {
  tab1: boolean;
  tab2: boolean;
  tab3: boolean;
}
export interface onboard_tab_type_v2 {
  onboard_tab: onboard_tab_type;
  set_onboarding_tab: (state: onboard_tab_type) => void;
}


export interface button_type{
  text:string;
  page_route:string;
}