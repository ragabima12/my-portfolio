import { supabase } from '../supabase';

export const portfolioService = {
  /**
   * Mengambil data hero section
   */
  async getHero() {
    try {
      const { data, error } = await supabase.from('hero').select('*').single();

      if (error) throw error;

      // Ambil typing texts
      const { data: typingTexts, error: typingError } = await supabase
        .from('typing_texts')
        .select('*')
        .order('sort_order', { ascending: true });

      if (typingError) throw typingError;

      return { ...data, typingTexts };
    } catch (error) {
      console.error('Error fetching hero data:', error);
      return null;
    }
  },

  /**
   * Mengambil data about/personal info
   */
  async getAbout() {
    try {
      const { data, error } = await supabase.from('about').select('*').single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching about data:', error);
      return null;
    }
  },

  /**
   * Mengambil semua projects
   */
  async getProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  /**
   * Mengambil project berdasarkan slug
   */
  async getProjectBySlug(slug) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching project by slug:', error);
      return null;
    }
  },

  /**
   * Mengambil semua skills
   */
  async getSkills() {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true })
        .order('proficiency', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching skills:', error);
      return [];
    }
  },

  /**
   * Mengambil semua experience
   */
  async getExperiences() {
    try {
      const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching experiences:', error);
      return [];
    }
  },

  /**
   * Mengambil semua social links
   */
  async getSocialLinks() {
    try {
      const { data, error } = await supabase.from('social_links').select('*');

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching social links:', error);
      return [];
    }
  },
};

export default portfolioService;
