const Applicants = require("../data/applicants")
const { cachedAsync } = require("../utils")
const { response } = require("../utils")

const getApplicants = async (req, res) => {
  const applicants = await Applicants.list();
  response(res, req, 200, applicants)
}

const postApplicant = async (req, res) => {
  const applicant = await Applicants.create(req.body);
  response(res, req, 200, applicant)
}

const deleteApplicant = async (req, res) => {
  const { id } = req.params;
  const applicant = await Applicants.delete(id);
  response(res, req, 200, applicant)
}

const getOneApplicant = async (req, res) => {
  const { id } = req.params;
  const applicant = await Applicants.getOne(id);
  response(res, req, 200, applicant)
}

const putApplicant = async (req, res) => {
  const { id } = req.params;
  const applicant = await Applicants.update(id, req.body);
  response(res, req, 200, applicant)
}


module.exports = {
  getApplicants: cachedAsync(getApplicants),
  postApplicant: cachedAsync(postApplicant),
  deleteApplicant: cachedAsync(deleteApplicant),
  getOneApplicant: cachedAsync(getOneApplicant),
  putApplicant: cachedAsync(putApplicant)
}