import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    header: Schema.Attribute.String;
    Information: Schema.Attribute.Component<'shared.information', true>;
  };
}

export interface SharedCopyright extends Struct.ComponentSchema {
  collectionName: 'components_shared_copyrights';
  info: {
    displayName: 'copyright';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface SharedDetailExam extends Struct.ComponentSchema {
  collectionName: 'components_shared_detail_exams';
  info: {
    description: '';
    displayName: 'detail_exam';
  };
  attributes: {};
}

export interface SharedExam extends Struct.ComponentSchema {
  collectionName: 'components_shared_exams';
  info: {
    description: '';
    displayName: 'exam';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    question: Schema.Attribute.Component<'shared.question', true>;
    status_try: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_features_sections';
  info: {
    description: '';
    displayName: 'features_section';
  };
  attributes: {
    header: Schema.Attribute.String;
    section_items: Schema.Attribute.Component<'shared.section-items', true>;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    contactOne: Schema.Attribute.Component<'shared.contact', false>;
    contactTwo: Schema.Attribute.Component<'shared.contact', false>;
    copyright: Schema.Attribute.Component<'shared.copyright', false>;
    header: Schema.Attribute.Component<'shared.header', false>;
    quick_link: Schema.Attribute.Component<'shared.quick-link', false>;
    social_media: Schema.Attribute.Component<'shared.social-network', true>;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    logo_text: Schema.Attribute.String;
    slogan: Schema.Attribute.String;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    description: '';
    displayName: 'hero_section';
  };
  attributes: {
    content: Schema.Attribute.Text;
    header: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    panner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedInformation extends Struct.ComponentSchema {
  collectionName: 'components_shared_information';
  info: {
    displayName: 'Information';
  };
  attributes: {
    content: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface SharedInformationUser extends Struct.ComponentSchema {
  collectionName: 'components_shared_information_users';
  info: {
    description: '';
    displayName: 'information_user';
  };
  attributes: {
    address: Schema.Attribute.String;
    class: Schema.Attribute.String;
    data: Schema.Attribute.Date;
    email: Schema.Attribute.String;
    fullname: Schema.Attribute.String;
    gender: Schema.Attribute.Enumeration<['Nam', 'N\u1EEF', '(kh\u00E1c)']>;
    lock: Schema.Attribute.String;
    msv: Schema.Attribute.String;
    nationality: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    study: Schema.Attribute.String;
  };
}

export interface SharedItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'items';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavbarItemsLeft extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_items_lefts';
  info: {
    description: '';
    displayName: 'Navbar_items_left';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedProvider extends Struct.ComponentSchema {
  collectionName: 'components_shared_providers';
  info: {
    description: '';
    displayName: 'provider';
  };
  attributes: {
    name: Schema.Attribute.Text;
    question: Schema.Attribute.Component<'shared.question', true>;
  };
}

export interface SharedQuestion extends Struct.ComponentSchema {
  collectionName: 'components_shared_questions';
  info: {
    description: '';
    displayName: 'question';
  };
  attributes: {
    answerA: Schema.Attribute.Text;
    answerB: Schema.Attribute.Text;
    answerC: Schema.Attribute.Text;
    answerD: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
    results: Schema.Attribute.Text;
  };
}

export interface SharedQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_quick_links';
  info: {
    description: '';
    displayName: 'quick_link';
  };
  attributes: {
    header: Schema.Attribute.String;
    Information: Schema.Attribute.Component<'shared.navbar-items-left', true>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    btn_nav: Schema.Attribute.Component<'shared.navbar-items-left', true>;
    items: Schema.Attribute.Component<'shared.navbar-items-left', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSectionItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_items';
  info: {
    displayName: 'section_items';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialNetwork extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_networks';
  info: {
    description: '';
    displayName: 'social_network';
  };
  attributes: {
    icon: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedStatisticsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics_sections';
  info: {
    displayName: 'statistics_section';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedSubject extends Struct.ComponentSchema {
  collectionName: 'components_shared_subjects';
  info: {
    displayName: 'subject';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.Text;
    status_try: Schema.Attribute.Boolean;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact': SharedContact;
      'shared.copyright': SharedCopyright;
      'shared.detail-exam': SharedDetailExam;
      'shared.exam': SharedExam;
      'shared.features-section': SharedFeaturesSection;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.hero-section': SharedHeroSection;
      'shared.information': SharedInformation;
      'shared.information-user': SharedInformationUser;
      'shared.items': SharedItems;
      'shared.media': SharedMedia;
      'shared.navbar-items-left': SharedNavbarItemsLeft;
      'shared.provider': SharedProvider;
      'shared.question': SharedQuestion;
      'shared.quick-link': SharedQuickLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-items': SharedSectionItems;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-network': SharedSocialNetwork;
      'shared.statistics-section': SharedStatisticsSection;
      'shared.subject': SharedSubject;
    }
  }
}
