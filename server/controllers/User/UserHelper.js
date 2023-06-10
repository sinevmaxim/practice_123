import { User } from '../../models/index.js';

export const isAdmin = async (id) => {
    if (id != null) {
        const user = await User.findById(id);
        return user.role.toLowerCase() == 'admin';
    }
};
