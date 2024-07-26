import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface FooterPages extends Schema.Component {
  collectionName: 'components_footer_pages';
  info: {
    displayName: 'Pages';
  };
  attributes: {};
}

export interface HomePageSectionsAboutUs extends Schema.Component {
  collectionName: 'components_section_aboutuses';
  info: {
    displayName: 'AboutUs';
    description: '';
  };
  attributes: {
    smallTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface HomePageSectionsBannerOne extends Schema.Component {
  collectionName: 'components_home_page_sections_banner_ones';
  info: {
    displayName: 'bannerOne';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface HomePageSectionsCard extends Schema.Component {
  collectionName: 'components_home_page_sections_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    location: Attribute.String;
  };
}

export interface HomePageSectionsContactItem extends Schema.Component {
  collectionName: 'components_home_page_sections_contact_items';
  info: {
    displayName: 'contactItem';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text;
  };
}

export interface HomePageSectionsContact extends Schema.Component {
  collectionName: 'components_home_page_sections_contacts';
  info: {
    displayName: 'contact';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    inputFields: Attribute.Component<'home-page-sections.input-field', true>;
    contactItems: Attribute.Component<'home-page-sections.contact-item', true>;
    title: Attribute.String;
    titleTwo: Attribute.String;
    button: Attribute.String & Attribute.Required;
  };
}

export interface HomePageSectionsForyouList extends Schema.Component {
  collectionName: 'components_home_page_sections_foryou_lists';
  info: {
    displayName: 'foryouList';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface HomePageSectionsForyou extends Schema.Component {
  collectionName: 'components_home_page_sections_foryous';
  info: {
    displayName: 'foryou';
    description: '';
  };
  attributes: {
    smallTitle: Attribute.String;
    title: Attribute.String;
    items: Attribute.Component<'home-page-sections.foryou-list', true> &
      Attribute.Required;
  };
}

export interface HomePageSectionsHero extends Schema.Component {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    lead: Attribute.Text;
    images: Attribute.Media;
  };
}

export interface HomePageSectionsIcon extends Schema.Component {
  collectionName: 'components_home_page_sections_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface HomePageSectionsInputField extends Schema.Component {
  collectionName: 'components_home_page_sections_input_fields';
  info: {
    displayName: 'inputField';
  };
  attributes: {
    name: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface HomePageSectionsStories extends Schema.Component {
  collectionName: 'components_home_page_sections_stories';
  info: {
    displayName: 'Stories';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'home-page-sections.card', true>;
  };
}

export interface HomePageSectionsTakeAction extends Schema.Component {
  collectionName: 'components_home_page_sections_take_actions';
  info: {
    displayName: 'TakeAction';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'home-page-sections.icon', true> &
      Attribute.Required;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface NavbarNavbarItem extends Schema.Component {
  collectionName: 'components_navbar_navbar_items';
  info: {
    displayName: 'Navbar-item';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface NavbarNavbar extends Schema.Component {
  collectionName: 'components_navbar_navbars';
  info: {
    displayName: 'Navbar';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
    NavbarItems: Attribute.Component<'navbar.navbar-item', true>;
  };
}

export interface PagesPageCookie extends Schema.Component {
  collectionName: 'components_pages_page_cookies';
  info: {
    displayName: 'PageCookie';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PagesPagePrivacy extends Schema.Component {
  collectionName: 'components_pages_page_privacies';
  info: {
    displayName: 'PagePrivacy';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    text: Attribute.RichText & Attribute.Required;
  };
}

export interface PagesSupportPage extends Schema.Component {
  collectionName: 'components_pages_support_pages';
  info: {
    displayName: 'SupportPage';
  };
  attributes: {
    support: Attribute.Component<'pages.support'>;
  };
}

export interface PagesSupport extends Schema.Component {
  collectionName: 'components_pages_supports';
  info: {
    displayName: 'support';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    card: Attribute.Component<'pages.supprt-card', true>;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface PagesSupprtCard extends Schema.Component {
  collectionName: 'components_pages_supprt_cards';
  info: {
    displayName: 'supprt-card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface PagesTermAndConditions extends Schema.Component {
  collectionName: 'components_pages_term_and_conditions';
  info: {
    displayName: 'PageTermAndConditions';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PagesThankYou extends Schema.Component {
  collectionName: 'components_pages_thank_yous';
  info: {
    displayName: 'ThankYou';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
    image: Attribute.Media & Attribute.Required;
    button: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.footer': FooterFooter;
      'footer.pages': FooterPages;
      'home-page-sections.about-us': HomePageSectionsAboutUs;
      'home-page-sections.banner-one': HomePageSectionsBannerOne;
      'home-page-sections.card': HomePageSectionsCard;
      'home-page-sections.contact-item': HomePageSectionsContactItem;
      'home-page-sections.contact': HomePageSectionsContact;
      'home-page-sections.foryou-list': HomePageSectionsForyouList;
      'home-page-sections.foryou': HomePageSectionsForyou;
      'home-page-sections.hero': HomePageSectionsHero;
      'home-page-sections.icon': HomePageSectionsIcon;
      'home-page-sections.input-field': HomePageSectionsInputField;
      'home-page-sections.stories': HomePageSectionsStories;
      'home-page-sections.take-action': HomePageSectionsTakeAction;
      'navbar.navbar-item': NavbarNavbarItem;
      'navbar.navbar': NavbarNavbar;
      'pages.page-cookie': PagesPageCookie;
      'pages.page-privacy': PagesPagePrivacy;
      'pages.support-page': PagesSupportPage;
      'pages.support': PagesSupport;
      'pages.supprt-card': PagesSupprtCard;
      'pages.term-and-conditions': PagesTermAndConditions;
      'pages.thank-you': PagesThankYou;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
