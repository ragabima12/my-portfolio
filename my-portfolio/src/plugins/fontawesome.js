import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Tambahkan ikon yang ingin Anda gunakan
library.add(faHome, faEnvelope, faCode, faGithub, faLinkedin);

export { FontAwesomeIcon };
