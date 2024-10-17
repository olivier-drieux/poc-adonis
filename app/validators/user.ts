import vine from '@vinejs/vine'

/**
 * Validates the user's creation action
 */
export const createUserValidator = vine.compile(
    vine.object({
        fullName: vine.string().trim(),
        email: vine
            .string()
            .trim()
            .email()
            .unique(async (db, value) => {
                return !(await db.from('users').where('email', value).first())
            }),
        password: vine.string().trim().escape().minLength(8),
    })
)
