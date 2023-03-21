export interface SampleForm {
  fields: {
    firstname: {
      name: string;
      value: string;
      isValid: boolean;
    };
    lastname: {
      name: string;
      value: string;
      isValid: boolean;
    };

    tel: {
      name: string;
      value: string;
      isValid: boolean;
    };
    email: {
      name: string;
      value: string;
      isValid: boolean;
    };
    nickname: {
      name: string;
      value: string;
      isValid: boolean;
    };
    password: {
      name: string;
      value: string;
      isValid: boolean;
    };
    confirmpassword: {
      name: string;
      value: string;
      isValid: boolean;
    };
  };
}
export const SAMPLE_FORM = {
  fields: {
    firstname: {
      name: 'firstname',
      value: '',
      isValid: false,
    },
    lastname: {
      name: 'lastname',
      value: '',
      isValid: false,
    },
    nickname: {
      name: 'nickname',
      value: '',
      isValid: false,
    },
    email: {
      name: 'email',
      value: '',
      isValid: false,
    },
    tel: {
      name: 'tel',
      value: '',
      isValid: false,
    },
    password: {
      name: 'password',
      value: '',
      isValid: false,
    },
    confirmpassword: {
      name: 'confirmpassword',
      value: '',
      isValid: false,
    },
  },
  isValid: false,
};
