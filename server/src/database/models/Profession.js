module.exports = (sequelize, DataTypes) => {
    const Profession = sequelize.define('Profession', {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: 'professions', 
    })
    
    Profession.associate = (models) => {
        Profession.belongsToMany(models.Applicant, {
          as: 'applicants',
          through: 'applicantsprofessions',
          foreignKey: 'idProfession',
          otherKey: 'idApplicant',
          timestamps: false
        })
    }

    return Profession;
}