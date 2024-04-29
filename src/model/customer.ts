export type CustomerModel = {
  id: string;
  name: string;
  status: string;
  phone?: string | undefined;
  birthDate?: string | undefined;
  email?: string | undefined;
  insurance?: string | undefined;
  next_session?: string | undefined;
  next_session_price?: string | undefined;
  observations?: string;
};

export type CustomerSessionsModel = {
  id: string;
  status: 'pending' | 'success' | 'canceled';
  date: string;
};
