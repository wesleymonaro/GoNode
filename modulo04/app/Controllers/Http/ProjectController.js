'use strict'

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  /**
   * Show a list of all projects.
   * GET projects
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new project.
   * GET projects/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new project.
   * POST projects
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single project.
   * GET projects/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing project.
   * GET projects/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProjectController
