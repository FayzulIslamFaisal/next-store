import React from 'react'

const ManageTakePhoto = () => {
  return (
    <div className="accordion-item rounded border-0 mb-4">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed bg-white rounded customer-dashboard-subtitle" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                        aria-expanded="false" aria-controls="flush-collapseFour">
                                        Take a photo
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body border-top">
                                        <div className="customer-manage-profile-from-area">
                                            <form action="">
                                                <div className="mb-3">
                                                    <label for="photo" className="form-label">
                                                        Uplod Your Photo
                                                        <span className="text-danger fw-bold">*</span>
                                                    </label>
                                                    <input className="form-control" type="file" accept="image/*" name="photo" capture id="photo"/>
                                                </div>
                                                <div>
                                                    <input className="add-to-cart-link border-0 mx-auto" type="submit" value="Update Profile Picture"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
  )
}

export default ManageTakePhoto
